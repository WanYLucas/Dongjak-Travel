#!/usr/bin/env node
import { execSync } from 'node:child_process';

function run(cmd) {
  return execSync(cmd, { stdio: 'pipe' }).toString().trim();
}

try {
  // 확인: 변경사항 없으면 종료
  const status = run('git status --porcelain');
  if (!status) process.exit(0);

  // 변경 요약 생성
  const shortStat = run('git diff --cached --name-only');
  // 스테이징
  run('git add -A');

  // 커밋 메시지(한글, Conventional Commits 기반)
  const filesChanged = run('git diff --cached --name-only');
  if (!filesChanged) process.exit(0);

  const lines = filesChanged.split('\n');
  const maxPreview = 8;
  const preview = lines.slice(0, maxPreview).map(f => `- ${f}`).join('\n');
  const more = lines.length > maxPreview ? `\n- 외 ${lines.length - maxPreview}개 파일` : '';

  const message = `chore: 자동 커밋 (AI 작업 감지)

변경 파일:
${preview}${more}`;

  run(`git commit -m ${JSON.stringify(message)}`);
  // 현재 브랜치 업스트림에 푸시(실패해도 무시)
  try { run('git push'); } catch {}

  console.log('✅ 자동 커밋 완료');
} catch (e) {
  console.error('❌ 자동 커밋 실패:', e.message || e);
  process.exit(0);
}


