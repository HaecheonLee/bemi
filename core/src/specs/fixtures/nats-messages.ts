import { NatsMessage, encodeData } from '../../nats'

export const POSITIONS = {
  CREATE: 35878528,
  UPDATE: 35878832,
  DELETE: 35878952,
  TRUNCATE: 35909944,
  HEARTBEAT_MESSAGE: 371211568,
  HEARTBEAT_CHANGE: 371211569,
}

export const MESSAGE_DATA = {
  CREATE: {
    before: null,
    after: { id: 2, task: 'Test', isCompleted: false },
    source: {
      version: '2.4.1.Final',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1701191180939,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '["35878464","35878528"]',
      schema: 'public',
      table: 'todo',
      txId: 768,
      lsn: POSITIONS.CREATE.toString(),
      xmin: null
    },
    op: 'c',
    ts_ms: 1701191181391,
    transaction: null
  },
  CREATE_MESSAGE: {
    op: 'm',
    ts_ms: 1701191181388,
    source: {
      version: '2.4.1.Final',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1701191180939,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '["35878464","35878528"]',
      schema: '',
      table: '',
      txId: 768,
      lsn: POSITIONS.CREATE.toString(),
      xmin: null
    },
    message: { prefix: '_bemi', content: 'eyJvcCI6ICJjIn0=' },
  },
  UPDATE: {
    before: { id: 2, task: 'Test', isCompleted: false },
    after: { id: 2, task: 'Test', isCompleted: true },
    source: {
      version: '2.4.1.Final',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1701191182443,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '["35878712","35878832"]',
      schema: 'public',
      table: 'todo',
      txId: 769,
      lsn: POSITIONS.UPDATE.toString(),
      xmin: null
    },
    op: 'u',
    ts_ms: 1701191182946,
    transaction: null,
  },
  UPDATE_MESSAGE: {
    op: 'm',
    ts_ms: 1701191182933,
    source: {
      version: '2.4.1.Final',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1701191182443,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '["35878712","35878832"]',
      schema: '',
      table: '',
      txId: 769,
      lsn: POSITIONS.UPDATE.toString(),
      xmin: null
    },
    message: { prefix: '_bemi', content: 'eyJvcCI6ICJ1In0=' },
  },
  DELETE: {
    before: { id: 2, task: 'Test', isCompleted: true },
    after: null,
    source: {
      version: '2.4.1.Final',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1701191176912,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '[null,"35878952"]',
      schema: 'public',
      table: 'todo',
      txId: 767,
      lsn: POSITIONS.DELETE.toString(),
      xmin: null
    },
    op: 'd',
    ts_ms: 1701191177309,
    transaction: null,
  },
  DELETE_MESSAGE: {
    op: 'm',
    ts_ms: 1701191177262,
    source: {
      version: '2.4.1.Final',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1701191176912,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '[null,"35878952"]',
      schema: '',
      table: '',
      txId: 767,
      lsn: POSITIONS.DELETE,
      xmin: null
    },
    message: { prefix: '_bemi', content: 'eyJvcCI6ICJkIn0=' },
  },
  TRUNCATE: {
    before: null,
    after: null,
    source: {
      version: '2.4.1.Final',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1701192054867,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '["35878976","35909944"]',
      schema: 'public',
      table: 'todo',
      txId: 770,
      lsn: POSITIONS.TRUNCATE.toString(),
      xmin: null
    },
    op: 't',
    ts_ms: 1701192064622,
    transaction: null,
  },
  HEARTBEAT_MESSAGE: {
    op: 'm',
    ts_ms: 1706128742602,
    source: {
      version: '2.5.0-SNAPSHOT',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1706128742600,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '["371211440","371211568"]',
      schema: '',
      table: '',
      txId: 4215,
      lsn: POSITIONS.HEARTBEAT_MESSAGE.toString(),
      xmin: null
    },
    message: { prefix: '_bemi_heartbeat', content: '' }
  },
  HEARTBEAT_CHANGE: {
    before: null,
    after: { id: 1, last_heartbeat_at: "2024-04-18T20:40:29.086091Z" },
    source: {
      version: "2.5.0-SNAPSHOT",
      connector: "postgresql",
      name: "prefix",
      ts_ms: 1713472829086,
      snapshot: "false",
      db: "bemi_dev_source",
      sequence: "[\"24830282128\",\"24897389232\"]",
      schema: "_bemi",
      table: "heartbeats",
      txId: 3497,
      lsn: 371211569,
      xmin: null,
    },
    op: "u",
    ts_ms: 1713472829090,
    transaction: null,
  },
  NON_BEMI_MESSAGE: {
    op: 'm',
    ts_ms: 1706128742602,
    source: {
      version: '2.5.0-SNAPSHOT',
      connector: 'postgresql',
      name: 'us-west-1-bemi-dev',
      ts_ms: 1706128742600,
      snapshot: 'false',
      db: 'bemi_dev_source',
      sequence: '["371211440","371211568"]',
      schema: '',
      table: '',
      txId: null,
      lsn: 94229520,
      xmin: null
    },
    message: { prefix: 'something-else', content: 'cGluZw==' }
  },
}

export const buildNatsMessage = (
  { subject, data, streamSequence }:
  { subject: string, data: any, streamSequence: number }
): NatsMessage => ({
  subject,
  info: {
    streamSequence,
    pending: 0,
  },
  data: encodeData(data),
  ack: () => {},
})
