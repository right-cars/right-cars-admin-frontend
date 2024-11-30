export default function UserInfoBlock() {
    return(  <div>
      <h2 className="text-md font-bold mb-14 text-black uppercase">login: <span className="text-blue font-normal">humeniuk1997@gmail.com</span></h2>
      <div className="p-8 bg-white rounded-lg shadow-custom ">
        {/* <div className="grid grid-cols-2 gap-4">
          {inputs.map((input) => (
            input.isFileInput ? (
              <FileUploadInput
                key={input.id}
                label={input.label}
                onFileChange={(file) => {
                  onFileChange(input.id, file);
                }}
              />
            ) : (
              <InfoInput
                key={input.id}
                label={input.label}
                value={input.value}
                onChange={(newValue) => onInputChange(title, input.id, newValue)}
              />
            )
          ))}
        </div> */}
      </div>
    </div>)
}