import * as pulumi from "@pulumi/pulumi";
import * as kafka from "@pulumi/kafka";

new kafka.Topic("test-topic", {
    name : "test-topic",
    partitions: 4,
    replicationFactor: 1,
    config: new Map<string, any>([["retention.ms", "1200000"]])
  } );