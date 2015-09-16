# Plugin Para Envio de Mensagem de Contato
## Itens Utilizados: PHP, JQuery, Bootstrap e Bootstrap.Dialog.

**FIST - Primeiro**
- Configurar o arquivo: **configuracao-enviar.php**
	- 1 Colocar o endereço do Site em que sera aplicado o Plugin (sem os protocolos HTTP e HTTPS)
		**Exemplo:*	
		```$url = "www.vitorpereira.com.br";```
	- 2 Colocar o email para o qual sera destinado o email quando o mesmo for separado
		**Exemplo:**
		```$emailPara = "vitor_gja_@hotmail.com";```
	- 3 Imagem Logotipo do Site/Empresa, lembrando que é o caminho completo ex.: "img/logos/logo-2014.png"
		**Exemplo**
		```$imgLogo = "imagens/logotipo.jpg"; ```

**SECOND - Segundo**
- Incluindo arquivos **necessarios**
	* Voce já tem o Bootstrap e JQuery no seu projeto?
		* **SIM** Basta apenas incluir 1 css e 1 js do Bootstrap.Dialog.
```
&#60;!-- CSS BOOTSTRAP DIALOG -->
&#60;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/css/bootstrap-dialog.min.css">

&#60;!-- JS BOOTSTRAP DIALOG -->
&#60;script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/js/bootstrap-dialog.min.js">&#60;/script>

&#60;!-- Script que Envia envia ao php as mensagens -->
&#60;script src="js/enviar.js"></script>
```
	* **NÃO** Então tera que incluir os arquivos do Bootstrap(css e js), 
	* do JQuery(js) e do Bootstrap.Dialog(css e js)

```
&#60;!-- CSS BOOTSTRAP -->
&#60;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

&#60;!-- CSS BOOTSTRAP DIALOG -->
&#60;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/css/bootstrap-dialog.min.css">

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">&#60;/script>

&#60;!-- JS BOOTSTRAP -->
&#60;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js">&#60;/script>

&#60;!-- JS BOOTSTRAP DIALOG -->
&#60;script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/js/bootstrap-dialog.min.js">&#60;/script>

&#60;!-- Script que Envia envia ao php as mensagens -->
&#60;script src="js/enviar.js"></script>
```		

**THIRD - Terceiro**

- 


>	nome: &#60;input type="text" name="nome">
>
>	email: &#60;input type="email" name="email">
>
>	assunto: &#60;input type="text" name="assunto">
>
>	mensagem: &#60;textarea name="mensagem">&#60;/textarea>
>
>	&#60;button type="button" data-input="submit">enviar&#60;/button>
>
