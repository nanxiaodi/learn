# 创建nest步骤
-  npm i -g @nestjs/cli
-  nest new project-name --strict
    - 传入--strict参数为创建typescript项目
- nest g controller [name]
    - 创建一个controller
- nest g service [name] 
    - 创建一个service

# 文件目录
- app.controller
    - 集成接口以及其他代码逻辑
- app.service
    - 编写业务逻辑供controller层调用
- app.module
    - 依赖注入
- app.dto
    - 数据传输模型（数据类型校验）

# 装饰器
- @Get
    - 接口类型为get请求
- @Post
    - 接口类型为Post请求
- @Delete
    - 接口类型为Delete
- @Put 
    - 接口类型为Put
- @Body 
    - 接收post请求参数
- @Query
    - 接收get请求参数
- @Headers
    - 接收请求header参数
