import IdeasApi from "../services/IdeasApi";
import { IdeaList } from "./IdeaList";

export class IdeaForm {
  #formModal;
  #form;
  #ideaList;

  constructor() {
    this.#formModal = document.querySelector("#form-modal");
    this.#ideaList = new IdeaList();
  }

  addEventListeners() {
    this.#form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.#form.elements.text.value || !this.#form.elements.tag.value || !this.#form.elements.username.value) {
      alert("Please enter all fields");
      return;
    }

    // Save user to local storage
    localStorage.setItem("username", this.#form.elements.username.value);

    const idea = {
      text: this.#form.elements.text.value,
      tag: this.#form.elements.tag.value,
      username: this.#form.elements.username.value,
    };

    // Add idea to server
    const newIdea = await IdeasApi.createIdea(idea);

    // Add idea to list
    this.#ideaList.addIdeaToList(newIdea.data.data);

    // Clear fields
    this.#form.elements.text.value = "";
    this.#form.elements.tag.value = "";
    this.#form.elements.username.value = "";

    this.render();

    document.dispatchEvent(new Event("closemodal"));
  }

  render() {
    this.#formModal.innerHTML = `
        <form id="idea-form">
            <div class="form-control">
                <label for="idea-text">Enter a Username</label>
                <input type="text" name="username" id="username" value="${
                  localStorage.getItem("username") ? localStorage.getItem("username") : ""
                }" required/>
            </div>
            <div class="form-control">
                <label for="idea-text">What's Your Idea?</label>
                <textarea name="text" id="idea-text" required></textarea>
            </div>
            <div class="form-control">
                <label for="tag">Tag</label>
                <input type="text" name="tag" id="tag" required/>
            </div>
            <button class="btn" type="submit" id="submit">Submit</button>
        </form>
        `;

    this.#form = document.querySelector("#idea-form");
    this.addEventListeners();
  }
}
