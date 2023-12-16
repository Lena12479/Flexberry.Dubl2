docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dubl2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t dubl2/app ../..
