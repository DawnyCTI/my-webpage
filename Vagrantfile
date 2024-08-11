Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/bionic64"
    config.vm.network "private_network", type: "dhcp"
  
    config.vm.provision "shell", inline: <<-SHELL
      sudo apt-get update
      sudo apt-get install -y apache2
      sudo systemctl start apache2
      sudo systemctl enable apache2
      sudo mkdir -p /var/www/html
      sudo cp /vagrant/index.html /var/www/html/index.html
    SHELL
  end
  