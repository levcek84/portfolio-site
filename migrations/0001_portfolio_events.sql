CREATE TABLE IF NOT EXISTS portfolio_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_name TEXT NOT NULL,
  target TEXT NOT NULL DEFAULT '',
  language TEXT NOT NULL DEFAULT '',
  path TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_portfolio_events_created_at
  ON portfolio_events (created_at);

CREATE INDEX IF NOT EXISTS idx_portfolio_events_event_name
  ON portfolio_events (event_name);
