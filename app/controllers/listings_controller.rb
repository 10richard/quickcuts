class ListingsController < ApplicationController
    before_action :authenticate_user!

    def index
        @listings = Listing.all
    end

    def new
        @listing = Listing.new
        5.times do 
            @listing.services.build
        end
    end

    def create
        @listing = current_user.build_listing(listing_params)

        if @listing.save
            flash[:success] = 'Listing successfully created'
            redirect_to @listing and return
        end
        render :new, status: :unprocessable_entity
    end

    def show
        @listing = Listing.find(params[:id])
    end

    def edit
        @listing = Listing.find(params[:id])
    end

    def update
        @listing = Listing.find(params[:id])

        if @listing.update(listing_params)
            redirect_to @listing and return
        end
        render :edit, status: :unprocessable_entity
    end

    def destroy
        @listing = Listing.find(params[:id])
        @listing.destroy

        redirect_to :authenticated_root
    end

    private
    def listing_params
        params.require(:listing).permit(:title, services_attributes: [:id, :name, :price])
    end
end
