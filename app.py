from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Aqui você pode processar o login
        pass
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Processar os dados do formulário de registro
        full_name = request.form['fullName']
        email = request.form['email']
        team = request.form['team']
        password = request.form['password']
        confirm_password = request.form['confirmPassword']
        
        # Lógica para tratar os dados recebidos, como validação e armazenamento
        
        return redirect('/login')  # Redireciona após o cadastro

    return render_template('register.html')

@app.route('/Corinthians')
def corinthians():
    return render_template('corinthians.html')

@app.route('/Internacional')
def internacional():
    return render_template('internacional.html')

@app.route('/Cuiaba')
def cuiaba():
    return render_template('cuiaba.html')

if __name__ == '__main__':
    app.run(debug=True)
