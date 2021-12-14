let app = new Vue({
    el: '#app',
    data: {
        produits : [{planche : 1 , litre : "142", model : "Exosett"},
            {planche : 2 , litre : "167", model : "F1"},
            {planche : 3 , litre : "102", model : "Jp australia"}],
        commandes : [],
    },
    methods:{
        commander: function(produit){
            this.commandes.push(produit);
        },
        supprimer: function (commande){
            this.commandes.splice(commande,1);
        },
    }
});