angular.module('app.controllers', [])
  
.controller('jobsDetailBusinessCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('jobsDetailCustomerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('jobsListCustomerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	

}])
   
.controller('jobsListBusinessCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	

}])
   
.controller('jobsListTechnicianCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$location','$timeout','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$location,$timeout,$state) {

    $scope.login = function(){
    	
    	var queryResult;
        	console.log("AWS.");
        var creds = new AWS.CognitoIdentityCredentials({
        //Blanked out the poolId for now. Please fill in
		IdentityPoolId: ''
		});

		AWS.config.update({
			region: 'us-east-1',
			credentials: creds
		});
		var dynamodb = new AWS.DynamoDB();
		var docClient = new AWS.DynamoDB.DocumentClient();
		
			var queryResult;
			var tableName = 'Employees';
		var params = {
		TableName: tableName,
		KeyConditionExpression: "#attr = :name ",
		 ExpressionAttributeNames:{
			"#attr": "username",
		},
		ExpressionAttributeValues: {
			":name":$scope.username,
		}
		};
		
		docClient.query(params,  function(err, data) {
				if (err) {
				console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
				} else {
				console.log("Query succeeded.");
				queryResult = data;
				console.log(data);
				onComplete();
				}
			});
			function onComplete() {
			
			if(queryResult){
				if( $scope.username == queryResult.Items[0].username &&  $scope.password == queryResult.Items[0].password){
    				if( queryResult.Items[0].position == 'M'){
    					$state.go('owner');
    				} else if(queryResult.Items[0].position == 'C'){
    					$state.go('customer');
    				} else if(queryResult.Items[0].position == 'T'){
    					$state.go('technician');
    				}
				}
			}
		}
    	
    	
    	 /*
    	console.log($scope.username);
    	if( $scope.username === 'manager' &&  $scope.password === 'Password1'){
    		$state.go('owner');
    	} else if($scope.username === 'customer'){
    		$state.go('customer');
    	} else if($scope.username === 'technician'){
    		$state.go('technician');
    	}

        
        //AWS
       var queryResult;
        	console.log("AWS.");
        var creds = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: 'us-east-1:4868d830-7f18-4d2c-b0a9-88aac9b231cc'
		});

		AWS.config.update({
			region: 'us-east-1',
			credentials: creds
		});
		var dynamodb = new AWS.DynamoDB();
		var docClient = new AWS.DynamoDB.DocumentClient();
		
			var queryResult;
			var tableName = 'HCMUsers';
		var params = {
		TableName: tableName,
		KeyConditionExpression: "#attr = :name ",
		 ExpressionAttributeNames:{
			"#attr": "username",
		},
		ExpressionAttributeValues: {
			":name":"JoeG",
		}
		};
		
		docClient.query(params,  function(err, data) {
				if (err) {
				console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
				} else {
				console.log("Query succeeded.");
				queryResult = data;
				console.log(data);
				onComplete();
				}
			});
			function onComplete() {
			
			$state.go('owner');
		}*/
		
        
    }

}])
   
.controller('customerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('ownerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('technicianCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('createJobCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('fixMyProblemCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 