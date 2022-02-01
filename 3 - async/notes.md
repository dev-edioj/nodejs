xx## Por que o Assíncrono?

* Sync = Faz a chamada I/O bloqueante
(Executa um por vez)

* Async = Faz a chamada I/O não bloqueante (Executa em paralelo, como se fosse em pilhas)
* Async maximiza o processo e minimiza o tempo de execução

### Thread vs Assincronismo

Chamadas assicronas jamais serão consideradas threads.

* As threads são manipuláveis, você pode pausar uma thread ou fazê-lá esperar o termíno de outra.

* As chamadas assincronas apenas invocam suas funções em uma ordem que você não tem controle e você só sabe quando uma chamada terminou quando seu callback é executado. 
