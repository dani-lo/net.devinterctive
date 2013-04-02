require "yaml"

module Dictionary
    def self.initialize
        YAML::load(File.open("data/dictionary.yaml")).each do |key, var|
            const_set(key.upcase, var)
        end
    end
end

Dictionary.initialize