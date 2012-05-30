# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120528104757) do

  create_table "advsponsoredlistings", :force => true do |t|
    t.string   "title"
    t.string   "shortdescription"
    t.text     "description"
    t.string   "activatedform"
    t.string   "listingtypes"
    t.string   "georelevance"
    t.string   "userlevel"
    t.string   "sponsored_item1"
    t.string   "sponsored_item2"
    t.string   "category"
    t.string   "conten_type"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  create_table "blogs", :force => true do |t|
    t.string   "title"
    t.string   "short_description"
    t.text     "description"
    t.string   "author"
    t.integer  "user_id"
    t.date     "date"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "category"
  end

  create_table "savedblogs", :force => true do |t|
    t.integer  "user_id"
    t.integer  "blog_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "savedlistings", :force => true do |t|
    t.integer  "user_id"
    t.integer  "advsponsoredlistings_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "simple_captcha_data", :force => true do |t|
    t.string   "key",        :limit => 40
    t.string   "value",      :limit => 6
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "simple_captcha_data", ["key"], :name => "idx_key"

  create_table "users", :force => true do |t|
    t.string   "email",                                 :default => "",     :null => false
    t.string   "encrypted_password",     :limit => 128, :default => "",     :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                         :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "firstname"
    t.string   "lastname"
    t.string   "g_location"
    t.string   "level_in_business"
    t.string   "area_of_interest"
    t.string   "linkedin_url"
    t.string   "twitter_url"
    t.string   "social_url"
    t.boolean  "contribution"
    t.string   "alternate_email"
    t.string   "company"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.integer  "phone"
    t.integer  "fax"
    t.string   "company_site"
    t.string   "role",                                  :default => "user"
  end

  add_index "users", ["confirmation_token"], :name => "index_users_on_confirmation_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
