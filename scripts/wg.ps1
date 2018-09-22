[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
wget $args[0] -O $args[1]
