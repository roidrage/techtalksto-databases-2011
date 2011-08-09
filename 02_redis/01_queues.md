!SLIDE center redis

<a href="http://redis.io"><img src="redis.png"></a>

!SLIDE bullets incremental

## What is Redis? ##

* Data Structure Server
* Key-Value Access
* Multiple Data Types

!SLIDE bullets incremental

## Data Types ##

* Strings
* Lists
* Sets
* Sorted Sets
* Hashes

!SLIDE bullets incremental

## ...and more ##

* Atomic Operations
* Pub/Sub
* Transactions

!SLIDE small

## Protocol

    SET key value

!SLIDE small

## Protocol

    RPUSH list item

!SLIDE small

## Content-Agnostic

    @@@ ruby
    job = {
      id: 1,
      class: "ConfirmationEmailWorker",
      args: ["meyer@paperplanes.de"]
    }

!SLIDE small

## Jobs

    @@@ ruby
    redis.lpush("queue:confirmation_emails", JSON.dump(job))

!SLIDE smaller

## Under the hood

    LPUSH queue:confirmation_emails,
    {"id":1, "class":"ConfirmationEmailWorker", "args":["meyer@paperplanes.de"]}

!SLIDE small

## Workers

    RPOP queue:confirmation_emails

!SLIDE small

## Workers in Ruby

    @@@ ruby
    job = JSON.parse(
      redis.lpop("jobs")
    )
    Worker.new(job)

!SLIDE small

## Blocking Workers

    @@@ ruby
    redis.blpop("queue:confirmation_emails")

!SLIDE small

## Mark Job as In-Progress

    @@@ ruby
    @redis.rpush("jobs-in-progress", job)

!SLIDE bullets incremental

# [Resque](https://github.com/defunkt/resque)

* Ruby Message Queue
* Ported To Many Languages
* Full Visibility Into The System
