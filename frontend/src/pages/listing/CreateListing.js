import React, {useState} from 'react';
import './CreateListing.css';
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
const CreateListing = () => {
  const [guestCount, setGuestCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [photos, setPhotos] = useState([]);

  const handleUpload = (e) => {
    const newPhotos = e.target.files;
    setPhotos((prevPhotos) =>[...prevPhotos, ...newPhotos]);
  }

  const handleDragPhoto = (result) =>{
    if(!result.destination) return;
    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPhotos(items);
  }

  const handleRemovePhoto = (indexRemove) =>{
    setPhotos((prevPhotos) => prevPhotos.filter((_, index) => index !== indexRemove));
  }



  return (
    <div>
     
      <form>
        <div className="form-group">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Listing name" />
        <input type="number" placeholder="Price" />
        <select  placeholder="Type">
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="land">Land</option>
        </select>

        <div className="basics">
          <div className="basic">
            <p>Guests</p>
            <div className="basic_count">
              <RemoveCircleOutline
                onClick={() => {
                  guestCount > 1 && setGuestCount(guestCount - 1);
                }}
                sx={{
                  fontSize: "25px",
                  cursor: "pointer",
                  "&:hover": { color: '#ff354f' },
                }}
              />
              <p>{guestCount}</p>
              <AddCircleOutline
                onClick={() => {
                  setGuestCount(guestCount + 1);
                }}
                sx={{
                  fontSize: "25px",
                  cursor: "pointer",
                  "&:hover": { color: '#ff354f' },
                }}
              />
            </div>
          </div>

          <div className="basic">
            <p>Bedrooms</p>
            <div className="basic_count">
              <RemoveCircleOutline
                onClick={() => {
                  bedroomCount > 1 && setBedroomCount(bedroomCount - 1);
                }}
                sx={{
                  fontSize: "25px",
                  cursor: "pointer",
                  "&:hover": { color: '#ff354f' },
                }}
              />
              <p>{bedroomCount}</p>
              <AddCircleOutline
                onClick={() => {
                  setBedroomCount(bedroomCount + 1);
                }}
                sx={{
                  fontSize: "25px",
                  cursor: "pointer",
                  "&:hover": { color: '#ff354f' },
                }}
              />
            </div>
          </div>

          <div className="basic">
            <p>Beds</p>
            <div className="basic_count">
              <RemoveCircleOutline
                onClick={() => {
                  bedCount > 1 && setBedCount(bedCount - 1);
                }}
                sx={{
                  fontSize: "25px",
                  cursor: "pointer",
                  "&:hover": { color: '#ff354f' },
                }}
              />
              <p>{bedCount}</p>
              <AddCircleOutline
                onClick={() => {
                  setBedCount(bedCount + 1);
                }}
                sx={{
                  fontSize: "25px",
                  cursor: "pointer",
                  "&:hover": { color: '#ff354f' },
                }}
              />
            </div>
          </div>

          <div className="basic">
            <p>Bathrooms</p>
            <div className="basic_count">
              <RemoveCircleOutline
                onClick={() => {
                  bathroomCount > 1 && setBathroomCount(bathroomCount - 1);
                }}
                sx={{
                  fontSize: "25px",
                  cursor: "pointer",
                  "&:hover": { color: '#ff354f' },
                }}
              />
              <p>{bathroomCount}</p>
              <AddCircleOutline
                onClick={() => {
                  setBathroomCount(bathroomCount + 1);
                }}
                sx={{
                  fontSize: "25px",
                  cursor: "pointer",
                  "&:hover": { color: '#ff354f' },
                }}
              />
            </div>
          </div>
        </div>
        <div className="amenities">
        <input type="text" placeholder="Ameneties" />
        <button className='add'>Add</button>
        </div>
         <textarea placeholder="Description"  row="5" cols="10"/>
         <div className="uploadImage">
        <DragDropContext onDragEnd={handleDragPhoto}>
              <Droppable droppableId="photos" direction="horizontal">
                {(provided) => (
                  <div
                    className="photos"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {photos.length < 1 && (
                      <>
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUpload}
                          multiple
                        />
                        <label htmlFor="image" className="alone">
                          <div className="icon">
                            <FileUploadOutlinedIcon />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}

                    {photos.length >= 1 && (
                      <>
                        {photos.map((photo, index) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={index.toString()}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="photo"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <img
                                    src={URL.createObjectURL(photo)}
                                    alt="place"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleRemovePhoto(index)}
                                  >
                                    <DeleteOutlineOutlinedIcon />
                                  </button>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          multiple
                        />
                        <label htmlFor="image" className="together">
                          <div className="icon">
                            <PhotoLibraryOutlinedIcon />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
              </div>
              <div className='create-cancel'>
        <button className='create' type="submit">Create</button>
        <button className='cancel' type="submit">Cancel</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default CreateListing