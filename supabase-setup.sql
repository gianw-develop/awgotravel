-- Supabase SQL: Create the inquiries table for contact form
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  destination TEXT,
  travelers INTEGER DEFAULT 2,
  travel_dates TEXT,
  budget TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated reads (for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);
