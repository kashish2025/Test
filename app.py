from flask import Flask, render_template, request, jsonify, url_for, json
import random

app = Flask('excuseGenerator')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/documentation')
def docs():
    return render_template('documentation.html')

@app.route("/fetch")
def fetch_excuse_random():   
    with open("excuses_list.json", "r", encoding="utf-8") as file:
        excuses = json.load(file) 
        random_cat = random.choice(list(excuses.keys()))
    return jsonify(excuse=random.choice(excuses[random_cat]), status="success")

@app.route('/fetch/<category>')
def fetch_excuse_category(category):
    with open("excuses_list.json", "r", encoding="utf-8") as file:
        excuses = json.load(file)
        category = category 
    return jsonify(excuse=excuses[category], status="success")

if __name__ == "__main__":
    app.run(debug=True)


