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
		- **SIM** Basta apenas incluir 1 css e 1 js do Bootstrap.Dialog.

> 		<!-- CSS BOOTSTRAP DIALOG -->	
> 		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/css/bootstrap-dialog.min.css">
>
> 		<!-- JS BOOTSTRAP DIALOG -->	
> 		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/js/bootstrap-dialog.min.js" &#62;</script>
>
> 		<!-- Script que Envia envia ao php as mensagens -->
> 		<script src="js/enviar.js"></script>
>

#asdasdasd
		- **NÃO** Então tera que incluir os arquivos do Bootstrap(css e js), 
		 do JQuery(js) e do Bootstrap.Dialog(css e js)


> 		<!-- CSS BOOTSTRAP -->	
> 		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">	
>
> 		<!-- CSS BOOTSTRAP DIALOG -->	
> 		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/css/bootstrap-dialog.min.css">	

> 		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->	
> 		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>	

> 		<!-- JS BOOTSTRAP -->
> 		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>	
>
> 		<!--JS BOOTSTRAP DIALOG -->	
>		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.5/js/bootstrap-dialog.min.js">	</script>	
>
> 		<!-- Script que Envia envia ao php as mensagens -->	
> 		<script src="js/enviar.js"></script>	
		

**THIRD - Terceiro**

  


>	nome: <input type="text" name="nome">
>
>	email: <input type="email" name="email">
>
>	assunto: <input type="text" name="assunto">
>
>	mensagem: <textarea name="mensagem"></textarea>
>
>	<button type="button" data-input="submit">enviar</button>
>
