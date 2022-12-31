import { useDispatch, useSelector } from "react-redux";
import { addTagsInput, textInputs } from "../redux/action/blogFormActionFunc";

const BlogUploadEditForm = () => {
   const dispatch = useDispatch();

   const form = useSelector((state) => state.form);
   console.log(form);

   const handleUploadForm = (e) => {
      e.preventDefault();
      console.log(e);
   };
   return (
      <div>
         <form action="" onSubmit={handleUploadForm}>
            <label
               htmlFor="title"
               className="block mb-2 text-lg font-medium text-gray-900 py-2"
            >
               Title
            </label>
            <input
               type="text"
               name="title"
               onBlur={(e) => dispatch(textInputs(e.target.name, e.target.value))}
               className="w-full bg-gray-50 py-3 px-3 rounded-xl focus:outline-0 mb-6"
               id="title"
               placeholder="Text input"
            />

            <label
               htmlFor="text"
               className="block mb-2 text-lg font-medium text-gray-900 "
            >
               Your message
            </label>
            <textarea
               id="text"
               rows="4"
               name="text"
               onBlur={(e) => dispatch(textInputs(e.target.name, e.target.value))}
               className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:outline mb-6"
               placeholder="Write your thoughts here..."
            ></textarea>

            <div>
               <label
                  htmlFor="tags"
                  className="block text-lg font-medium text-gray-900 py-2"
               >
                  Edit Tags
               </label>
               <select
                  id="tags"
                  defaultValue="default"
                  onChange={(e) => dispatch(addTagsInput(e.target.value))}
                  className="block py-2.5 px-3 w-full text-gray-500 border-b bg-gray-50 appearance-none focus:outline-0 focus:ring-0"
               >
                  <option disabled value="default">
                     Choose a country
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Programming">Programming</option>
                  <option value="Resume">Resume</option>
                  <option value="Github">Github</option>
               </select>

               <div></div>

               <button
                  type="submit"
                  className="px-5 py-3 bg-[#9ED5CB] text-white font-semibold rounded-lg mt-10"
               >
                  Add New
               </button>
            </div>
         </form>
      </div>
   );
};

export default BlogUploadEditForm;
