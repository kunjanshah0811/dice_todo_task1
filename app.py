from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/reverse', methods=['POST'])
def reverse_string():
    data = request.get_json()
    print(data)
    reversed_string = data['input'][::-1]
    return jsonify({'reversed': reversed_string})

if __name__ == '__main__':
    app.run(debug=True)
