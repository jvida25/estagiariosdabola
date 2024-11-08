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

@app.route('/Noticia')
def noticia_1():
    return render_template('noticias_1.html')

@app.route('/Athletico-PR')
def athletico_pr():
    return render_template('athletico_pr.html')

@app.route('/Atletico-GO')
def atletico_go():
    return render_template('atletico_go.html')

@app.route('/Atletico-MG')
def atletico_mg():
    return render_template('atletico_mg.html')

@app.route('/Bahia')
def bahia():
    return render_template('bahia.html')

@app.route('/Botafogo')
def botafogo():
    return render_template('botafogo.html')

@app.route('/Bragantino')
def bragantino():
    return render_template('bragantino.html')

@app.route('/Corinthians')
def corinthians():
    return render_template('corinthians.html')

@app.route('/Criciuma')
def criciuma():
    return render_template('criciuma.html')

@app.route('/Cruzeiro')
def cruzeiro():
    return render_template('cruzeiro.html')


@app.route('/Cuiaba')
def cuiaba():
    return render_template('cuiaba.html')


@app.route('/Flamengo')
def flamengo():
    return render_template('flamengo.html')


@app.route('/Fluminense')
def fluminense():
    return render_template('fluminense.html')


@app.route('/Fortaleza')
def fortaleza():
    return render_template('fortaleza.html')

@app.route('/Gremio')
def gremio():
    return render_template('gremio.html')

@app.route('/Internacional')
def internacional():
    return render_template('internacional.html')

@app.route('/Juventude')
def juventude():
    return render_template('juventude.html')

@app.route('/Palmeiras')
def palmeiras():
    return render_template('palmeiras.html')

@app.route('/Sao Paulo')
def sao_paulo():
    return render_template('sao_paulo.html')

@app.route('/Vasco')
def vasco():
    return render_template('vasco.html')

@app.route('/Vitoria')
def vitoria():
    return render_template('vitoria.html')

if __name__ == '__main__':
    app.run(debug=True)
