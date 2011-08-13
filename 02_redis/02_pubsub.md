!SLIDE

# Publish/Subscribe

!SLIDE small

## Sub ##

    SUBSCRIBE notifications.new-users

!SLIDE small

## Pub ##

    PUBLISH notifications.new-users "Mathias signed up"

!SLIDE small

## Pattern-Matching Subscriptions ##

    PSUBSCRIBE notifications.*

!SLIDE small

## Publish ##

    PUBLISH notifications.new-users "Mathias signed up"

!SLIDE

## [WebSockets](http://www.html5rocks.com/tutorials/websockets/basics/) ##

!SLIDE smaller

## WebSocket Server ##

    @@@ coffeescript
    ws = require "websocket-server"

    server = ws.createServer()

    server.addListener "connection", (connection) ->
      connection.addListener "message", (msg) ->
        connection.send msg

    server.listen 8080

!SLIDE smaller

## Subscriber ##

    @@@ coffeescript
    redis = require("redis").createClient()

    redis.subscribe "notifications"
    redis.on "message", (channel, message) ->
      connection.send message

!SLIDE smaller

## Subscribe To Patterns

    @@@ coffeescript
    redis.psubscribe "notifications.*"

    redis.on "pmessage", (pattern, channel, message) ->
      connection.send message

!SLIDE smaller

## Your Web Frontend

    @@@ javascript
    websocket = new WebSocket("ws://localhost:8081");
    websocket.onmessage = function(evt) {
      onMessage(evt);
    };

    setTimeout(function() {
      websocket.send("new-users");
    }, 1000);

!SLIDE smaller

## Your App

    @@@ coffeescript
    redis.publish "notifications.new-users",
                  "#{user.name} signed up"

!SLIDE

# Demo

!SLIDE websockets-demo center bullets

<ul></ul>

<script>
$(".websockets-demo").bind("showoff:show", function (event) {
  $(this).children('ul').each(function() {
    $(this).children().remove();
    var self = this;
    function onMessage(evt) {
      var li = $(document.createElement('li'));
      li.text(evt.data)
      $(self).append(li);
    }
    websocket = new WebSocket("ws://localhost:8080");
    websocket.onmessage = onMessage;
    websocket.onopen = function(evt) {
      var li = $(document.createElement('li'));
      li.text("Connected to WebSocket server");
      $(self).append(li);
    };
    websocket.onclose = function(evt) {
      var li = $(document.createElement('li'));
      li.text("Can't connect to WebSocket server");
      $(self).append(li);
    };
    setTimeout(function() {websocket.send("new-users");}, 1000);
  });
});

$('.websockets-demo').bind("showoff:next", function(event) {
  console.log(websocket)
  if (websocket !== undefined || websocket !== null) {
    websocket.close();
    websocket = null;
  }
});
</script>

!SLIDE bullets incremental

# Use Cases?

* Soft Real Time Updates
* Monitoring Dashboards
* Activity Feeds

!SLIDE

# `</redis>`
