# frozen_string_literal: true

namespace :test do
  task :migrate do
    puts 'Migrating test database'
    system 'bundle exec rails db:migrate RAILS_ENV=test'
  end

  task rspec: [:migrate] do
    puts 'Testing project with Rspec'
    exec 'bundle exec rspec'
  end
end

desc 'Test project'
task test: 'test:rspec'
