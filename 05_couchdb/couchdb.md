!SLIDE couchdb

![CouchDB](couchdb-logo.png)

!SLIDE

> CouchDB is made off the web.

<p class="caption">James Kaplan-Moss</p>

!SLIDE bullets incremental

# CouchDB #

* HTTP
* REST
* JSON
* JavaScript

!SLIDE smaller

# Documents

    @@@ javascript
    {
      "_id": "0a34bfe",
      "_rev": "1-6f773089b853fd5f7867562b179a854a",
      "title": "A Tale Of Databases",
      "type": "presentation"
      "tags": ["couchdb", "riak", "redis", "mongodb"]
      "published_at": "2011/08/13 11:00:00 -0500"
    }

!SLIDE smallish

# Write

    $ curl -X PUT localhost:5984/conferences/0a34bfe \
      -d "..."

!SLIDE smallish

# Get

    $ curl localhost:5984/conferences/0a34bfe
    {...}

!SLIDE center

# How do I query my data?

![MapReduce](mapreduce.png)
