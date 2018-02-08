# frozen_string_literal: true

module Api
  class TestController < ApiController
    def index
      render json: { message: 'This is a test message from the API' }
    end
  end
end
