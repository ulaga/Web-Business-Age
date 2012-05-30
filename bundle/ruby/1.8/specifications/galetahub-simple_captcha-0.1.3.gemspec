# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{galetahub-simple_captcha}
  s.version = "0.1.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Pavlo Galeta", "Igor Galeta"]
  s.date = %q{2011-12-20}
  s.description = %q{SimpleCaptcha is available to be used with Rails 3 or above and also it provides the backward compatibility with previous versions of Rails.}
  s.email = %q{galeta.igor@gmail.com}
  s.extra_rdoc_files = ["README.rdoc"]
  s.files = ["lib/generators/simple_captcha_generator.rb", "lib/generators/templates/migration.rb", "lib/generators/templates/partial.erb", "lib/generators/USAGE", "lib/simple_captcha.rb", "lib/simple_captcha/engine.rb", "lib/simple_captcha/utils.rb", "lib/simple_captcha/controller.rb", "lib/simple_captcha/view.rb", "lib/simple_captcha/formtastic.rb", "lib/simple_captcha/form_builder.rb", "lib/simple_captcha/simple_captcha_data.rb", "lib/simple_captcha/middleware.rb", "lib/simple_captcha/version.rb", "lib/simple_captcha/active_record.rb", "lib/simple_captcha/image.rb", "Rakefile", "README.rdoc", "test/simple_captcha_test.rb"]
  s.homepage = %q{http://github.com/galetahub/simple-captcha}
  s.require_paths = ["lib"]
  s.rubyforge_project = %q{galetahub-simple_captcha}
  s.rubygems_version = %q{1.3.7}
  s.summary = %q{SimpleCaptcha is the simplest and a robust captcha plugin.}
  s.test_files = ["test/simple_captcha_test.rb"]

  if s.respond_to? :specification_version then
    current_version = Gem::Specification::CURRENT_SPECIFICATION_VERSION
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
