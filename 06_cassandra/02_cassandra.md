!SLIDE center

![Cassandra](cassandra.png)

!SLIDE bullets incremental

# Cassandra #

* Write Availability
* Write Performance
* Very Efficient Data/Range Access

!SLIDE

* Wide Column Model
* Inspired by [Google BigTable](http://labs.google.com/papers/bigtable.html) and [Amazon's Dynamo](http://www.allthingsdistributed.com/2007/10/amazons_dynamo.html)

!SLIDE bullets incremental

# Data Model #

* Distributed Hashtable
* 1 Key: 1000s of Columns

!SLIDE bullets incremental

# Datenmodell #

* Column
* Column Family
* Super Column Family

!SLIDE bullets incremental

# Column #

* Attribute
* Value
* Timestamp

!SLIDE bullets incremental

# Column Family #

* ~= Table
* Contains Sorted Columns

!SLIDE bullets incremental

# Super Column Family #

* Columns of Columns

!SLIDE bullets incremental

# Indexes

* Keys
* (Super) Columns

!SLIDE small

# Column #

    @@@ ruby
    "email" => "meyer@paperplanes.de"

!SLIDE small

# Column Family #

    @@@ ruby
    Users["mathias"] =
      {"email" => "meyer@paperplanes.de"}

!SLIDE center

# Column Family #

![Column Family](columns.png)

!SLIDE small

# Super Column Family #

    @@@ ruby
    UserProfile["mathias"] = {
      "businessAddress" => {
        "city": "Berlin",
        "country": "Germany"
      }
    }

!SLIDE bullets incremental

# Data Model #

* Confusing...

!SLIDE bullets incremental

# Data Access #

* "Atomic" Inserts
* Efficient Range Queries

!SLIDE

# Write Performance

!SLIDE bullets incremental

# Data Structure #

* CommitLog
* MemTable
* SSTable

!SLIDE bullets incremental

# CommitLog #

* Append-Only
* Sequential Disk I/O

!SLIDE bullets incremental

# MemTable #

* In-Memory Hashtable
* "Cache"

!SLIDE bullets incremental

# SSTable #

* Sorted String Table
* Indexed For Efficiency

!SLIDE numbered incremental

# Writes #

1. CommitLog
2. MemTable
3. SSTable

!SLIDE

# Bottom Line

* Ordered Data
* Efficient Access
* High Performance Writes

!SLIDE

# Activity Feeds
