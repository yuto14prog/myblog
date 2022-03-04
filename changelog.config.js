module.exports = {
  disableEmoji: false,

  list: [
    'feat',
    'fix',
    'UI',
    'WIP',
    'chore',
    'docs',
    'refactor',
    'config',
    'package',
  ],

  maxMessageLength: 64,

  minMessageLength: 3,

  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'issues',
    'lerna',
  ],

  scopes: [],

  types: {
    chore: {
      description: 'その他: 補助ツールの変更 （ドキュメント生成などのソースやテストの変更を含まない変更）',
      emoji: ':teddy_bear:',
      value: 'chore',
    },
    UI: {
      description: 'UIやスタイルの更新',
      emoji: ':art:',
      value: 'UI',
    },
    docs: {
      description: 'ドキュメントの変更のみ',
      emoji: ':memo:',
      value: 'docs',
    },
    feat: {
      description: '新機能の追加や更新',
      emoji: ':sparkles:',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正',
      emoji: ':adhesive_bandage:',
      value: 'fix',
    },
    refactor: {
      description:
        'リファクタリングのための変更。機能追加やバグ修正を含まない変更',
      emoji: ':recycle:',
      value: 'refactor',
    },
    WIP: {
      description: '作業中',
      emoji: ':construction:',
      value: 'WIP',
    },
    config: {
      description: '設定ファイルの追加・修正',
      emoji: ':wrench:',
      value: 'config',
    },
    package: {
      description: 'パッケージの追加・更新・削除',
      emoji: ':package:',
      value: 'package',
    },
  },
}
