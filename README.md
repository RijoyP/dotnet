docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)
minikube start --driver=docker

Dotnet
------------------------------------

/mnt/e/dotnet/partymaster-api$docker build -t partymaster-api-dotnet:1.0.0 -f partymaster-api/Dockerfile .
docker run -p 80:80 -it partymaster-api-dotnet:1.0.0

https://learn.microsoft.com/en-us/dotnet/core/install/linux-ubuntu-2004
dotnet build "partymaster-api.csproj" -c Release
dotnet publish "partymaster-api.csproj" -c Release


React Js
---------------------------------

npm run build
npm run build --if-present
npm run test --if-present

/mnt/e/react/partymaster$ docker build -t partymaster:1.0.0 .
docker run -p 3000:80 -it partymaster:1.0.0

Java
---------------------------------

#will create target files
mvn clean install 

/mnt/e/java/partymaster-api$docker build -t partymaster-api-java:1.0.0 .
docker run -p 8080:8080 -it partymaster-api-java:1.0.0
