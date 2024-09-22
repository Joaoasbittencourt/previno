# Guia de Configuração do Projeto

## Pré-requisitos

- Python 3.7 ou superior
- pip (gerenciador de pacotes do Python)
- virtualenv (opcional, mas recomendado)

## Configuração do Ambiente

1. Clone o repositório:

   ```
   git clone [URL_DO_SEU_REPOSITORIO]
   cd [NOME_DO_DIRETORIO_DO_PROJETO]
   ```

2. Crie um ambiente virtual (opcional, mas recomendado):

   ```
   python -m venv venv
   ```

3. Ative o ambiente virtual:

   - No Windows:
     ```
     venv\Scripts\activate
     ```
   - No macOS e Linux:
     ```
     source venv/bin/activate
     ```

4. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

## Executando a Aplicação

1. Navegue até o diretório backend:

   ```
   cd backend
   ```

2. Execute a aplicação Flask:

   ```
   python app.py
   ```

3. A aplicação estará disponível em `http://localhost:5000`

## Estrutura do Projeto

- O arquivo principal da aplicação Flask está em `backend/app.py`
- As rotas da API estão definidas em `backend/app.py`
- O modelo de aprendizado de máquina está localizado no diretório `model`

## Notas Adicionais

- Certifique-se de que todas as dependências estão instaladas corretamente
- Para desenvolvimento, você pode usar o modo de depuração do Flask definindo `debug=True` em `app.run()`
- Lembre-se de nunca compartilhar informações sensíveis, como chaves de API ou senhas, no controle de versão
- link do modelo no colab: https://colab.research.google.com/drive/1m_i77ShSuNIrvPidmSLpRjuvxqumJCpc?usp=sharing
