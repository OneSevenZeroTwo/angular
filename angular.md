# Angular VS jQ


框架(express,angular) vs 库(jquery,zepto)

# 使用
引入ng
```javascript
<script src="angular.js"></script>
```

# 模块化
定义第一个模块
```javascript
var app = angular.module("模块名字",[依赖的模块名字]);
```

如果是多模块
```javascript
var app = angular.module("ngApp",[]);
var app2 = angular.module("ngApp2",[]);
var app3 = angular.module("ngApp2",[]);
```

# 控制器 模型 视图

M(model)提供数据的地方
V(视图) html的模板
C(控制器) 是一个无形手，连接M跟V的一个媒介

创建控制器
```javascript
//C
		app.controller("indexCtrl",function(){
			
		})
```

# 节点驱动跟数据驱动

jQ把重心放在对节点的增删查改
节点驱动:jQ $("").xxxx

ng把重心放在数据的变化上
数据驱动:$scope.name(作用域)=>{{name}}(表达式)
