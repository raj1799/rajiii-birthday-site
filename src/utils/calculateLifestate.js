export function calculateLifeStats(birthDateString) {
  const birth = new Date(birthDateString);
  const now = new Date();

  const diffMs = now - birth;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Heartbeat calculation:
  // Average resting HR = 72 bpm (romantic but accurate)
  const heartbeats = Math.floor(minutes * 72);

  return { days, hours, minutes, seconds, heartbeats };
}
