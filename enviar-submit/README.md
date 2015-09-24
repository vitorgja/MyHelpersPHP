# Plugin Para Envio de Mensagem de Contato
## Itens Utilizados: PHP, JQuery, Bootstrap e Bootstrap.Dialog.

**FIST - Primeiro**
### Configurar o arquivo: **configuracao-enviar.php**
* 1 Colocar o endereço do Site em que sera aplicado o Plugin (sem os protocolos HTTP e HTTPS)

>	**Exemplo:**	
```php
$url = "www.vitorpereira.com.br";
```
- 2 Colocar o email para o qual sera destinado o email quando o mesmo for separado

>	**Exemplo:**
```php
$emailPara = "vitor_gja_@hotmail.com";
```
* 3 Imagem Logotipo do Site/Empresa, lembrando que é o caminho completo ex.: "img/logos/logo-2014.png"

>	**Exemplo**
```php
$imgLogo = "imagens/logotipo.jpg";
```

**SECOND - Segundo**

### Incluindo arquivos **necessarios**
* Voce já tem o Bootstrap e JQuery no seu projeto?
	- **SIM** Basta apenas incluir 1 css e 1 js do Bootstrap.Dialog.
```html
 		<!-- CSS BOOTSTRAP DIALOG -->	
 		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/css/bootstrap-dialog.min.css">

 		<!-- JS BOOTSTRAP DIALOG -->	
 		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/js/bootstrap-dialog.min.js"></script>

 		<!-- Script que Envia envia ao php as mensagens -->
 		<script src="js/enviar.js"></script>
```
* Voce já tem o Bootstrap e JQuery no seu projeto?
	- **NÃO** Então tera que incluir os arquivos do Bootstrap(css e js), 
		 do JQuery(js) e do Bootstrap.Dialog(css e js)

```html
 		<!-- CSS BOOTSTRAP -->	
 		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
 		<!-- CSS BOOTSTRAP DIALOG -->	
 		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/css/bootstrap-dialog.min.css">	

 		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->	
 		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>	

 		<!-- JS BOOTSTRAP -->
 		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>	

 		<!--JS BOOTSTRAP DIALOG -->	
		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/js/bootstrap-dialog.min.js">	</script>	

 		<!-- Script que Envia envia ao php as mensagens -->	
 		<script src="js/enviar.js"></script>	
```		

**THIRD - Terceiro**
###### Atributos 'name' das Tags `<input>`, `<select>` e `<textarea>`
* name para o Nome do Usuario: 
```html
	nome: <input type="text" name="nome">
```
* name para o Email do Usuario: 
```html
	email: <input type="email" name="email">
```
* name para o Assunto que o Usuario tratar: 
```html
    assunto: <input type="text" name="assunto">
    <!-- OU -->
    assunto: 
    <select name="assunto">
    	<option value="">Selecione</option>
    	<option value="Duvidas">Duvidas</option>
    	<option value="Sugestoes">Sugestões</option>
    </select>
```
* name para a Mensagem Inserida pelo Usuario: 
```html
    mensagem: <textarea name="mensagem"></textarea>
```

###### Atributos para Fazer o envio do Formulario com as Tags `<input>` e `<button>`
* **type** para o envio tem que ser **igual** a button e **data-input** **igual** a submit
```html
    <button type="button" data-input="submit">enviar</button>
```
