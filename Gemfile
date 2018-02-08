# frozen_string_literal: true

ruby '2.4.1'

source 'https://rubygems.org'

gem 'activeadmin', github: 'activeadmin'
gem 'devise', '> 4.x'
gem 'pg'
gem 'puma', '~> 3.7'
gem 'rack-cors'
gem 'rails', '~> 5.1.4'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'factory_bot_rails'
  gem 'rspec-rails', '~> 3.7'
  gem 'rspec_junit_formatter'
  gem 'rubocop', require: false
end

group :development do
  gem 'dotenv-rails'
  gem 'foreman'
  gem 'guard'
  gem 'guard-rspec'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
