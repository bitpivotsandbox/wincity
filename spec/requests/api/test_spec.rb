# frozen_string_literal: true

require 'rails_helper'

describe 'Test API', type: :request do
  describe 'GET /api/test' do
    before { get '/api/test' }

    it 'returns test' do
      expect(json).not_to be_empty
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
