import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
      comments: [
        { 
          text: 'Looks great Julianne!',
          author: 'Robin Rendle',
          authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg'
        },
        { 
          text: 'I love the Sea',
          author: 'Miriam Suzanne',
          authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg'
        },
        { 
          text: 'Where are you?',
          author: 'Geoff Graham',
          authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg'
        }
      ]
	},

	getters: {},

	mutations: {
		addComment ({ comments }, newComment) {
		// destruct the comments array from state.
			const newCommentObj = {
				text: newComment,
		        author: 'Magoo',
		        authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg'
		    };
		    comments.push(newCommentObj);
	    },

	    removeComment (state, index) {
	    	// https://stackoverflow.com/a/39316999/4855889
	    	state.comments = [ ...state.comments.slice(0,index), ...state.comments.slice(index+1) ]
	    }
	},

	actions: {},
})