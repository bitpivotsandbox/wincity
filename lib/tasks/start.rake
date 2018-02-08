# frozen_string_literal: true

require 'dotenv/tasks' if Rails.env.development?

namespace :start do
  task cleanup_zombie_rails_server: [:dotenv] do
    puts 'Checking for running Rails server...'
    pid = `lsof -t -i tcp:#{ENV['SERVER_PORT']}`
    unless pid.empty?
      puts 'Killing old Rails server...'
      system "kill -9 #{pid}"
    end
  end

  task cleanup_zombie_webpack_server: [:dotenv] do
    puts 'Checking for running Webpack server...'
    pid = `lsof -t -i tcp:#{ENV['CLIENT_PORT']}`
    unless pid.empty?
      puts 'Killing old Webpack server...'
      system "kill -9 #{pid}"
    end
  end

  task development: [:cleanup_zombie_rails_server, :cleanup_zombie_webpack_server] do
    puts 'Starting Foreman...'
    exec 'bundle exec foreman start -f Procfile.dev'
  end
end

desc 'Start development server'
task start: 'start:development'
