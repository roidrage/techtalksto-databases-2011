!SLIDE center riak

![Riak](riak.png)

!SLIDE bullets incremental

# Riak #

* Availability
* Scalability
* [Amazon Dynamo](http://www.allthingsdistributed.com/2007/10/amazons_dynamo.html)

!SLIDE bullets incremental

# Riak #

* Key-Value Store
* Content-Agnostic

!SLIDE smaller

# Read

    $ curl localhost:8098/riak/confs/techtalksto

!SLIDE smaller

# Write

    $ curl -X PUT localhost:8098/riak/confs/techtalksto \
      -d '{type:"conference"}' \
      -H "Content-Type: application/json"

!SLIDE bullets incremental

# Availability #

* No Special Node
* Read Repairs

!SLIDE bullets incremental

# Scalability #

* Add/Remove Nodes
* Conflict Resolution

!SLIDE center

# Replication #

![Riak Distribution](riak-data-distribution.png)

!SLIDE bullets incremental

# Replication

* N Replicas Stored
* Quorum
* Quorum Tuneable On Read/Write
