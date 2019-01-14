                                 topics (all topics if absent).   
--zookeeper                    ZooKeeper connect string. (default:
                                 localhost:2181)                  
# bin/kafka-run-class.sh kafka.tools.ConsumerOffsetChecker --zookeeper zookeeper:2181 --topic name.jchein.demo.zumepizza.services.edge.potato.domain.Example --group newExampleCreation
[2018-04-29 18:03:21,351] WARN WARNING: ConsumerOffsetChecker is deprecated and will be dropped in releases following 0.9.0. Use ConsumerGroupCommand instead. (kafka.tools.ConsumerOffsetChecker$)
Group           Topic                          Pid Offset          logSize         Lag             Owner
newExampleCreation name.jchein.demo.zumepizza.services.edge.potato.domain.Example 0   3065            5500            2435            none
newExampleCreation name.jchein.demo.zumepizza.services.edge.potato.domain.Example 1   3026            5487            2461            none
# bin/kafka-run-class kafka.tools.ConsumerOffsetChecker --zookeeper zookeeper:2181
/bin/sh: 31: bin/kafka-run-class: not found
# bin/kafka-run-class.sh kafka.tools.ConsumerOffsetChecker --zookeeper zookeeper:2181
[2018-04-29 18:05:01,951] WARN WARNING: ConsumerOffsetChecker is deprecated and will be dropped in releases following 0.9.0. Use ConsumerGroupCommand instead. (kafka.tools.ConsumerOffsetChecker$)
Missing required argument "[group]"
Option                         Description                        
------                         -----------                        
--broker-info                  Print broker info                  
--group                        Consumer group.                    
--help                         Print this message.                
--retry.backoff.ms <Integer>   Retry back-off to use for failed   

