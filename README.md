# pulumi-kafka-bug-example

Run example:

```bash
export PULUMI_CONFIG_PASSPHRASE="";
docker-compose up -d;
cd pulumi-proj/;
pulumi up --diff;
```

It should create topic without config field:

```bash
pulumi up --diff --refresh
Previewing update (dev):
~ pulumi:pulumi:Stack: (refresh)
    [urn=urn:pulumi:dev::pulumi-kafka-bug-example::pulumi:pulumi:Stack::pulumi-kafka-bug-example-dev]
  pulumi:pulumi:Stack: (same)
    [urn=urn:pulumi:dev::pulumi-kafka-bug-example::pulumi:pulumi:Stack::pulumi-kafka-bug-example-dev]
    + kafka:index/topic:Topic: (create)
        [urn=urn:pulumi:dev::pulumi-kafka-bug-example::kafka:index/topic:Topic::test-topic]
        [provider=urn:pulumi:dev::pulumi-kafka-bug-example::pulumi:providers:kafka::default_3_0_1::04da6b54-80e4-46f7-96ec-b56ff0331ba9]
        config           : {
        }
        name             : "test-topic"
        partitions       : 4
        replicationFactor: 1
Resources:             
    + 1 to create
    1 unchanged
Do you want to perform this update? yes
Updating (dev):
~ pulumi:pulumi:Stack: (refresh)
    [urn=urn:pulumi:dev::pulumi-kafka-bug-example::pulumi:pulumi:Stack::pulumi-kafka-bug-example-dev]
  pulumi:pulumi:Stack: (same)
    [urn=urn:pulumi:dev::pulumi-kafka-bug-example::pulumi:pulumi:Stack::pulumi-kafka-bug-example-dev]
    + kafka:index/topic:Topic: (create)
        [urn=urn:pulumi:dev::pulumi-kafka-bug-example::kafka:index/topic:Topic::test-topic]
        [provider=urn:pulumi:dev::pulumi-kafka-bug-example::pulumi:providers:kafka::default_3_0_1::b69a96f7-fc1a-402d-adb0-b03cd91c4f80]
        config           : {
        }
        name             : "test-topic"
        partitions       : 4
        replicationFactor: 1
Resources:    
    + 1 created
    1 unchanged

```