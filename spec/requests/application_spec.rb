# frozen_string_literal: true

require 'rails_helper'

describe 'Application', type: :request do
  describe 'GET /' do
    before { get '/' }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns app index' do
      expect(response.body).to include('placeholder')
    end
  end

  describe 'GET /home' do
    before { get '/home' }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns app index' do
      expect(response.body).to include('placeholder')
    end
  end

  describe 'GET /robots.txt' do
    before { get '/robots.txt' }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns robots.txt' do
      expect(response.body).to include('www.robotstxt.org')
    end
  end
end
