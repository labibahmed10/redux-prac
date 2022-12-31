import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addTagsInput, removeATag, textInputs } from "../redux/action/blogFormActionFunc";
import ADD_CONTENT_THUNK from "../redux/thunk_middleware/ADD_CONTENT";

const BlogUploadEditForm = () => {
   const dispatch = useDispatch();
   const form = useSelector((state) => state.form);

   const handleUploadForm = (e) => {
      e.preventDefault();
      dispatch(ADD_CONTENT_THUNK(form));
   };

   return (
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
            htmlFor="image"
            className="block mb-2 text-lg font-medium text-gray-900 py-2"
         >
            Image URL
         </label>
         <input
            type="url"
            name="image"
            onBlur={(e) => dispatch(textInputs(e.target.name, e.target.value))}
            className="w-full bg-gray-50 py-3 px-3 rounded-xl focus:outline-0 mb-6"
            id="image"
            placeholder="Drop your url here"
         />

         <label htmlFor="text" className="block mb-2 text-lg font-medium text-gray-900 ">
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
                  Choose a blog tag
               </option>
               <option value="Web Development">Web Development</option>
               <option value="Programming">Programming</option>
               <option value="Resume">Resume</option>
               <option value="Github">Github</option>
            </select>

            <div className="mt-5 flex items-center justify-start gap-2">
               {form.tags.length > 0 &&
                  form.tags.map((tag, i) => (
                     <div
                        key={i}
                        className="flex justify-center items-center w-fit p-2 rounded-lg bg-[#9ed5cb] font-semibold"
                     >
                        <p>{tag}</p>{" "}
                        <GrFormClose
                           className=""
                           onClick={() => dispatch(removeATag(tag))}
                           size={30}
                        />
                     </div>
                  ))}
            </div>

            <button
               type="submit"
               disabled={
                  form.text.length > 0 && form.title.length > 0 && form.tags.length > 0
                     ? false
                     : true
               }
               className="px-5 py-3 bg-[#9ED5CB] text-white font-semibold rounded-lg mt-10"
            >
               Add New
            </button>
         </div>
      </form>
   );
};

export default BlogUploadEditForm;
