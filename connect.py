from flask import Flask,request
from flask import jsonify,request
from pymongo import MongoClient
from flask_cors import CORS


client = MongoClient('localhost', 27017) 
db = client.fpd   
todos = db.statusfeeDetails 

app = Flask(__name__)
title = "Flask+Mongo"
cors = CORS(app)

@app.route("/")
def redirect_url():
	return "Hello"



@app.route('/getCatTier',methods=['GET'])
def getCatTier():
	client_name = request.args.get('data')
	print(client_name)
	users = db.details.find_one({"clientName" : client_name})
	data = []
	data.append({'cat_tier_fees':users['cat_fees']})
	return jsonify(data)

@app.route('/getDetails',methods=['GET'])
def getDetails():
	client_name = request.args.get('data')
	print(client_name)
	if (client_name == None):
		users = db.details.find_one({"clientName":None})
		print("in if")
	else:
		users = db.details.find_one({"clientName" : client_name})
		print("in else")
	data = []
	data.append({'clientName':users['clientName'],'clientFeesOwner':users['clientFeesOwner'],'email':users['email'],\
		'secondaryEmail':users['secondaryEmail'],'createdBy':users['createdBy'],\
		'modifiedBy':users['modifiedBy'],'currency':users['currency'],'emailOptOut':users['emailOptOut'],\
		'carrierID':users['carrierID'],'exchangeRate':users['exchangeRate']})
	print(data)	
	return jsonify(data)

@app.route('/getTier',methods=['GET'])
def getTierData():
	client_name = request.args.get('data')
	print(client_name)
	users = db.details.find_one({"clientName" : client_name})
	print(users)
	data = []
	data.append({'tiers':users['tiers']})
	return jsonify(data)


@app.route('/addTier', methods=['POST'])

def addTier():
	addTier = db.details
	values = request.json
	client_name = request.args.get('data')
	print(client_name)
	print(values)
	itm = db.details.find_one({"clientName" : client_name})
	for i in values:
		addTier.update({"_id":itm.get('_id')},
			{'$push' : {
					"tiers" : {
						"min": i['min'],
						"max": i['max'],
						"sku" : i['sku']
					}
				}
			}
		)

	return "Success"
# Adding data to a particular cat tier fee
@app.route('/addCatTierData',methods=['POST'])
def addCatTierData():
	addCatTier = db.details
	client_name = request.args.get('data')
	print(client_name)
	cat_tier_name = request.args.get('data1')
	print(cat_tier_name)
	values = request.json
	print(values[0])
	itm = db.details.find_one({"clientName" : client_name})
	# itm['cat_fees'][cat_tier_name] = values
	# for i in values:
	# 	print(values[0]['min'])
	# 	addCatTier.update({"_id":itm.get('_id')},
	# 		{   '$push' : {
	# 				cat:{
	# 						"min": values[0]['min'],
	# 						"max": values[0]['max'],
	# 						"sku": values[0]['sku']
	# 				}
					
	# 			}
	# 		}
	# 	)
	addCatTier.update({"_id":itm.get('_id')}, {'$push': {
		'cat_fees.{}'.format(cat_tier_name):  values[0]
	}})
	return "success"

@app.route('/addCatTier', methods=['POST','GET'])

def addCatTier():
	addTier = db.details
	values = request.json
	client_name = request.args.get('data')
	print(client_name)
	print(values[0])
	itm = db.details.find_one({"clientName" : client_name})
	for i in values:
		addTier.update({"_id":itm.get('_id')},
			{   '$push' : {
					"cat_tier_fees" : {
						"min": i['min'],
						"max": i['max'],
						"sku" : i['sku']
					}
				}
			}
		)
	return "Success"

@app.route('/catTierMin', methods=['POST','GET'])
def CattierMin():
	client_name=request.args.get('data')
	print(client_name)
	print("client name   inn cat tier min")
	add = db.details
	itm=db.details.find_one({"clientName":client_name})
	cat_tier_name = request.args.get('data1')
	print(cat_tier_name)
	print("uyuyiy")
	print(itm['cat_fees'])
	print("!1111")
	if(itm['cat_fees'][cat_tier_name]):
		print("yes")
		for i in itm['cat_fees'][cat_tier_name]:
			print(i)
		print("mmmmmm")
		if(i["max"]==""):
			value2 =0
		else:
			value2=i["max"]
		
	else:
		print("no")
		value2=0
			
	return jsonify(value2)
@app.route('/tierMin', methods=['POST','GET'])
def tierMin():
	client_name=request.args.get('data')
	add = db.details
	itm=db.details.find_one({"clientName":client_name})
	if(itm["tiers"]):
		print("yes")
		for i in itm["tiers"]:
			print(i)
		print("mmmmmm")
		print(i["max"])
		if(i["max"]==""):
			value1 =0
		else:
			value1=i["max"]
	
	else:
		print("no")
		value1=0
	print(value1)
	print("uretiruetyreu")		
	return jsonify(value1)
# @app.route('/add', methods=['POST','GET'])
# def add():
# 	client_name=request.args.get('data')
# 	add = db.details
# 	itm=db.details.find_one({"clientName":client_name})
# 	if(itm["cat_tier_fees"]):
# 		print("yes")
# 		for i in itm["cat_tier_fees"]:
# 			print(i)
# 		print("mmmmmm")
# 		value1 = i["max"]
# 	else:
# 		print("no")
# 		value1=0
			
# 	return jsonify(value1)		

@app.route('/tierUpdate',methods=['POST','GET'])
def tierUpdate():
	users = db.details
	client_name = request.args.get('data')
	print(client_name)
	print("uuuuu")
	values = request.json
	print(values)
	print("kkk")	
	itm = db.details.find_one({'clientName':client_name})
	print (itm.get('_id'))
	x=len(values)/3
	print(x)
	j=0
	print(values[str(j)+'min'])
	users.update({"_id":itm.get('_id')},
	{	'$set':{
		"tiers":[]
		}

	})
	for i in range(x):
		print(i)
		users.update({"_id":itm.get('_id')},
			{   '$push' : {
					"tiers" :{
						"min": values[str(j)+'min'],
						"max": values[str(j)+'max'],
						"sku" :values[str(j)+'sku']
					}
				}
			}	
		)
		j=j+1
		print(j)	
	return "update success"

@app.route('/catTierUpdate',methods=['POST','GET'])
def cattierUpdate():
	users = db.details
	client_name = request.args.get('data')
	print(client_name)
	cat_tier_name = request.args.get('data1')
	print("uuuuu")
	values = request.json
	print(values)
	print("kkk")	
	itm = db.details.find_one({'clientName':client_name})
	print (itm.get('_id'))
	x=len(values)/3
	print(x)
	j=0
	print(values[str(j)+'min'])
	# addCatTier.update({"_id":itm.get('_id')}, {'$push': {
	# 	'cat_fees.{}'.format(cat_tier_name):  values[0]
	# }})
	users.update({"_id":itm.get('_id')},
	{	'$set':{
		'cat_fees.{}'.format(cat_tier_name):[]
		}

	})
	for i in range(x):
		print(i)
		users.update({"_id":itm.get('_id')},
			{   '$push' : {
					'cat_fees.{}'.format(cat_tier_name) :{
						"min": values[str(j)+'min'],
						"max": values[str(j)+'max'],
						"sku" :values[str(j)+'sku']
					}
				}
			}	
		)
		j=j+1
		print(j)	
	return "update success"

@app.route("/update", methods=['POST','GET'])
def updateDetails ():
	emailOpt= request.args.get('data')
	print(emailOpt)
	users = db.details
	values = request.json
	print(values)
	itm = db.details.find_one({'clientName': values['name']})
	print (itm.get('_id'))

	users.update({"_id":itm.get('_id')},
	 	{
		 '$set':{
			'clientName':values['name'],
			'clientFeesOwner':values['feesowner'],
			'email':values['email'],
			'secondaryEmail':values['semail'],
			# 'createdBy':values['created'],
			# 'modifiedBy':values['modified'],
			'currency':values['currency'],
			'emailOptOut':emailOpt,
			'carrierID':values['carrier'],
			'exchangeRate':values['exchange']
			}
		}
	)

	
	return "Updated"



@app.route('/getClients',methods=['GET'])
def getClients():
	users = db.details.find()
	data = []
	for user in users:
		data.append({'name':user['clientName']})
		
	return jsonify(data)

@app.route('/addClients', methods=['POST','GET'])
def addclient():
	addCat = db.details
	values = request.json
	print(values)
	addCat.insert({ "clientName":values['name'],"clientFeesOwner":None,"email":"","secondaryEmail":"","createdBy":"",\
		"modifiedBy":"","currency":"","emailOptOut":"",\
		"carrierID":"","exchangeRate":"","tiers":[{"min":0,"max":""}],"cat_fees":{"cat_tier_fees":[{"min":0,"max":""}]},"static_fees":{'admin':"",
				'itv':"",
				'photos':"",
				'state_ny':"",
				'reviewer':"",
				'erroneous':"",
				'erroneous_admin':""}})
	return jsonify(values)

@app.route('/getStaticFee',methods=['GET'])
def getStaticFee():
	client_name = request.args.get('data')
	print(client_name)
	# if (client_name == 'None'):
	# 	users = db.details.find_one({"clientName":None})
	# 	print("in if")
	
	users = db.details.find_one({"clientName" : client_name})
	print(users)
	data = []
	data.append({'static_fees':users['static_fees']})
	return jsonify(data)

@app.route("/updateStaticFee", methods=['POST','GET'])
def updateStaticFee ():
	users = db.details
	client_name = request.args.get('data')
	print(client_name)
	values = request.json
	print(values)
	itm = db.details.find_one({'clientName': client_name})
	print (itm.get('_id'))
	users.update({"_id":itm.get('_id')},
	 	{
		 '$set':{
			'static_fees':{
				'admin':values['admin'],
				'itv':values['itv'],
				'photos':values['photos'],
				'state_ny':values['state'],
				'reviewer':values['reviewer'],
				'erroneous':values['erroneous'],
				'erroneous_admin':values['erroneousAdmin'],
				}
		 	}
		}
	)
	return "Updated"

@app.route('/getCatTierData',methods=['GET'])
def getCatTierData():
	client_name = request.args.get('data')
	print(client_name)
	users = db.details.find_one({"clientName" : client_name})
	values = request.args.get('data1')
	print(values)
	data = []
	data.append({'cat_fees':users['cat_fees'][values]})
	print(data)
	return jsonify(data)

@app.route('/addCatTierFees',methods=['POST'])
def addCatTierFees():
	addCatTier = db.details
	client_name = request.args.get('data')
	print(client_name)
	users = db.details.find_one({"clientName" : client_name})
	values = request.json
	print(values['catTier'])
	itm = db.details.find_one({"clientName" : client_name})
	cat_fees = itm['cat_fees']
	cat_fees[values['catTier']] = [{'min': 0,'max':""}]
	addCatTier.update({"_id":itm.get('_id')},
		{   '$set' : {
			"cat_fees" :cat_fees
			}
		}
	)
	return "success"

if __name__ == "__main__":
	app.run(debug=True)



