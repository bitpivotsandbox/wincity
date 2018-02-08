# frozen_string_literal: true

namespace :lint do
  task :rubocop do
    puts 'Linting project with RuboCop'
    exec 'bundle exec rubocop'
  end
end

desc 'Lint project'
task lint: 'lint:rubocop'
