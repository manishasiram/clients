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

@app.route('/addCatTier', methods=['POST','GET'])
def addCatTier():
	addCat = db.catTier
	values = request.json
	print(values)
	for i in values:
		addCat.insert({ "llimit":i['llimit'], "ulimit":i['ulimit'], "sku":i['sku']})	
	return "Success"

@app.route('/getCatTier',methods=['GET'])
def getCatTierData():
	client_name = request.args.get('data')
	print(client_name)
	users = db.details.find_one({"clientName" : client_name})
	print(users)
	data = []
	# data.append({'llimit':user['llimit'],'ulimit':user['ulimit'],'sku':user['sku']})
	data.append({'cat_tier_fees':users['cat_tier_fees']})
	return jsonify(data)

@app.route('/getDetails',methods=['GET'])
def getDetails():
	# values = request.args.getlist('clientName')
	# values=request.args
	# print(values)
	client_name = request.args.get('data')
	print(client_name)
	
	# client_name = request.args.get('clientName')
	# print(client_name)
	if (client_name==None):
		users = db.details.find_one({})
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
	print("jhfgdjfgdjgg")
	return jsonify(data)

@app.route('/getTier',methods=['GET'])
def getTierData():
	client_name = request.args.get('data')
	print(client_name)
	users = db.details.find_one({"clientName" : client_name})
	print(users)
	data = []
	# data.append({'llimit':user['llimit'],'ulimit':user['ulimit'],'sku':user['sku']})
	data.append({'tiers':users['tiers']})
	return jsonify(data)


@app.route('/addTier', methods=['POST','GET'])

def addTier():
	
    addTier = db.details

    values = request.json

    print(values[0])

    itm = db.details.find_one({"clientName" : "Lighthouse"})

    for i in values:

        addTier.update({"_id":itm.get('_id')},

            {   '$push' : {

                    "tiers" : {

                        "llimit": i['llimit'],

                        "ulimit": i['ulimit'],

                        "sku" : i['sku']

                    }

                }

         

            }

       )

        # addTier.insert({ "llimit":i['llimit'], "ulimit":i['ulimit'], "sku":i['sku']})

    return "Success"



@app.route("/update", methods=['POST','GET'])
def updateDetails ():
	users = db.details
	values = request.json
	print(values)
	

	itm = db.details.find_one({})
	print (itm.get('_id'))

	users.update({"_id":itm.get('_id')},
	 	{
		 '$set':{
			'clientName':values['name'],
			'clientFeesOwner':values['feesowner'],
			'email':values['email'],
			'secondaryEmail':values['semail'],
			'createdBy':values['created'],
			'modifiedBy':values['modified'],
			'currency':values['currency'],
			'emailOptOut':values['emailOpt'],
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
	addCat.insert({ "clientName":values['name']})
	return jsonify(values)

if __name__ == "__main__":
	app.run(debug=True)



