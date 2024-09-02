// Classe Heroi que representa um herói de uma aventura
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem de ataque com base no tipo de herói
    atacar() {
      let ataque;
  
      // Verifica o tipo de herói e define o ataque correspondente
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const mago = new Heroi('Gandalf', 100, 'mago');
  mago.atacar();  // Saída: O mago atacou usando magia
  
  const guerreiro = new Heroi('Conan', 30, 'guerreiro');
  guerreiro.atacar();  // Saída: O guerreiro atacou usando espada
  
  const monge = new Heroi('Lao', 50, 'monge');
  monge.atacar();  // Saída: O monge atacou usando artes marciais
  
  const ninja = new Heroi('Hanzo', 25, 'ninja');
  ninja.atacar();  // Saída: O ninja atacou usando shuriken
  