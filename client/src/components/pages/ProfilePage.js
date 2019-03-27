import React from 'react'
import { MDBMask, MDBBtn, MDBIcon } from 'mdbreact';
//import chollet_profile from '../../assets/chollet_profile';
import chollet_profile from '../../assets/metis-data/repos_merged_df_1';
import chollet_repos from '../../assets/chollet_repos';

const data = JSON.parse(chollet_profile);
const repos = JSON.parse(chollet_repos);

const ProfilePage =  () => {
  return (
    <section className="repos">
      <div className='profile'>
          <div className='profile-user'>
            <img className='profile-user-image' src="https://avatars3.githubusercontent.com/u/710255?v=4" alt="profile"/>
                <h2>Fran&ccedil;ois Chollet</h2>
                <h3>Google</h3>
                <p>
                    <strong className="mb-2">About:</strong>
                    {data.bio} François Chollet is an AI & deep learning researcher, author of Keras, a leading deep learning framework for Python.
                </p>
                <div className="profile-user-url">
                    <MDBBtn size="sm" outline color="primary"><a rel="noopener noreferrer" target="_blank" href="https://github.com/fchollet">Github Profile</a></MDBBtn>
                </div>
          </div>
      </div>
         { 
          repos.map(repo => {
            if(repo.name !== 'community' && repo.name !== 'keras-blog' && repo.name !== 'nelder-mead' && repo.name !== 'hualos')
            return (
                <div className="repo" key={repo.id}>
                  <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/03/GitHub-brave-hed-796x418.jpg" alt="Project" className="repo-image"/>
                  <MDBMask overlay="white-slight"/>
                  <div className='repo-body'>
                    <h4 className="repo-body-title">
                      <strong>{repo.name}</strong>
                    </h4>
                    <p className="repo-body-text">{repo.description}</p>
                    <div className="repo-body-footer">
                        <a className="p-2" href={repo.html_url}>
                          Repo
                          <MDBIcon icon="image" className="ml-1"/>
                        </a>
                    </div>
                  </div>
                </div>
            )
          })
        }
    </section>
  );
}

export default ProfilePage;