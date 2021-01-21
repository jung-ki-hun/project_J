module.exports = {

  apps: [{
    script: 'server.js',
    watch: true,
    ignore_watch: ['.git', 'node_modules', 'storage'],
    instances: 0,  //코어당 1개씩하겠다.  -> 지금2개
    exec_mode: 'cluster',
    autorestart: true, // 프로세스 실패 시 자동으로 재시작할지 선택
    env: {
    },
  }],
}

