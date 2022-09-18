import React, { useState, useEffect }  from "react";
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Select from '@/Components/Select';
import TextArea from '@/Components/TextArea';
import Checkbox from '@/Components/Checkbox';
import SelectCategory from '@/Components/SelectCategory';
import SelectSubCategory from '@/Components/SelectSubCategory';
import { Inertia } from '@inertiajs/inertia';
import DateTimePicker from 'react-datetime-picker';
import { InertiaProgress } from '@inertiajs/progress'

export default function Create(props){
    const [subCategories,setSubCategories] = useState(props.subcategories);
    const [value, onChange] = useState(new Date());
	const { data, setData, post, processing, errors, reset, progress } = useForm({
        content_name: '',
        content_description: '',
        content_type: '',
        is_active: '',
        is_approved:'',
        is_ad_active:'',
        feature_banner:null,
        mobile_logo:null,
        mobile_thumbnail:null,
        web_logo:null,
        web_thumbnail:null,
        category:props?.category_id,
        sub_category:'',
        content_expire_time:new Date(),
        content_publish_time:new Date()
    });

    useEffect(() => {
        return () => {
            reset('content_name', 'content_description');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('contents.create'));
    };


    const onSelectHandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSelectCategoryChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        // Inertia.visit(route('contents.create',[e.target.value]), {
        // method: 'get',
        // data: {}
        // });
        console.log(parseInt(e.target.value));
        if(!isNaN(parseInt(e.target.value))){
        let subCat = props.categories.filter((category)=> {if(category.id==e.target.value){ return category.id; }})[0].sub_categories;
            setSubCategories(subCat);
        }else{
            setSubCategories(props.subcategories);
        }

    };

    const contentType = [{value:1,label:'VOD'},{ value:2, label:'Live'}];
    
	return (
		 <Authenticated
            auth={props.auth}
            errors={props.errors}
            menu={props.menu}
            logoUrl={props.logoUrl}
        >
        	<div className="container mx-4 mt-12">
                    <Head title="Create User" />

            <form className="w-2/3 mx-auto pb-4" onSubmit={submit} enctype="multipart/form-data">
                <div>
                    <Label forInput="content_name" value="Name" />

                    <Input
                        type="text"
                        name="content_name"
                        value={data.content_name}
                        className="mt-1 block w-full"
                        autoComplete="content_name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.content_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="content_description" value="Content Description" />
                    <TextArea
                        name="content_description"
                        value={data.content_description}
                        className="mt-1 block w-full"
                        autoComplete="content_description"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.content_description} className="mt-2" />
                </div>

                {/*<div className="mt-4">
                    <Label forInput="content_type" value="Content Type" />

                    <Input
                        type="text"
                        name="content_type"
                        value={data.content_type}
                        className="mt-1 block w-full"
                        autoComplete="content_type"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.content_type} className="mt-2" />
                </div>*/}
                <div className="mt-4">
                    <Label forInput="content_type" value="Content Type" />
                    <Select id="content_type" name="content_type" onChange={onSelectHandleChange} className="test" options={contentType} placeholder="Select Content Type" required="required" value={data.content_type} />
                </div>
                <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 mt-4">
                    <label className="flex items-center">
                        <Checkbox name="is_active" value={data.is_active} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Is Active</span>
                    </label>
                </div>

                <div className="col-span-1 mt-4">
                    <label className="flex items-center">
                        <Checkbox name="is_approved" value={data.is_approved} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Is Approved</span>
                    </label>
                </div>

                <div className="col-span-1 mt-4">
                    <label className="flex items-center">
                        <Checkbox name="is_ad_active" value={data.is_ad_active} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Is Ad Active</span>
                    </label>
                </div>
                </div>

                <div className="mt-4">
                    <Label forInput="feature_banner" value="Featre Banner" />

                    <input type="file" name="feature_banner" value={''} onChange={e => setData('feature_banner', e.target?.files[0])} />
                    { data.feature_banner && <img className="mt-1" width="500" src={URL.createObjectURL(data.feature_banner)} /> }
                    <InputError message={errors.feature_banner} className="mt-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 mt-4">
                    <Label forInput="mobile_logo" value="Mobile Logo" />

                    <input type="file" name="mobile_logo" value={''} onChange={e => setData('mobile_logo', e.target?.files[0])} />
                    { data.mobile_logo && <img className="mt-1" width="200" src={URL.createObjectURL(data.mobile_logo)} /> }
                    <InputError message={errors.mobile_logo} className="mt-2" />
                </div>

                <div className="col-span-1 mt-4">
                    <Label forInput="mobile_thumbnail" value="Mobile Thumbnail" />

                    <input type="file" name="mobile_thumbnail" value={''} onChange={e => setData('mobile_thumbnail', e.target?.files[0])} />
                    { data.mobile_thumbnail && <img className="mt-1" width="200" src={URL.createObjectURL(data.mobile_thumbnail)} /> }
                    <InputError message={errors.mobile_thumbnail} className="mt-2" />
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 mt-4">
                    <Label forInput="web_logo" value="Web Logo" />
                    <input type="file" name="web_logo" value={''} onChange={e => setData('web_logo', e.target?.files[0])} />
                    { data.web_logo && <img className="mt-1" width="200" src={URL.createObjectURL(data.web_logo)} /> }
                    <InputError message={errors.web_logo} className="mt-2" />
                </div>

                <div className="col-span-1 mt-4">
                    <Label forInput="web_thumbnail" value="Web Thumbnail" />
                    <input type="file" name="web_thumbnail" value={''} onChange={e => setData('web_thumbnail', e.target?.files[0])} />
                    { data.web_thumbnail && <img className="mt-1" width="300" src={URL.createObjectURL(data.web_thumbnail)} /> }
                    <InputError message={errors.web_thumbnail} className="mt-2" />
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 mt-4">
                    <Label forInput="stb_logo" value="Stb Logo" />
                    <input type="file" name="stb_logo" value={''} onChange={e => setData('stb_logo', e.target?.files[0])} />
                    { data.stb_logo && <img className="mt-1" width="300" src={URL.createObjectURL(data.stb_logo)} /> }
                    <InputError message={errors.stb_logo} className="mt-2" />
                </div>

                <div className="col-span-1 mt-4">
                    <Label forInput="stb_thumbnail" value="Stb Thumbnail" />
                    <input type="file" name="stb_thumbnail" value={''} onChange={e => setData('stb_thumbnail', e.target?.files[0])} />
                    { data.stb_thumbnail && <img className="mt-1" width="300" src={URL.createObjectURL(data.stb_thumbnail)} /> }
                    <InputError message={errors.stb_thumbnail} className="mt-2" />
                </div>
                </div>

                <div className="mt-4">
                    <Label forInput="share_url" value="Share Url" />

                    <Input
                        type="text"
                        name="share_url"
                        value={data.share_url}
                        className="mt-1 block w-full"
                        autoComplete="share_url"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.content_type} className="mt-2" />

                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 mt-4">
                        <label className="flex items-center">
                            <Checkbox name="is_premium" value={data.is_premium} handleChange={onHandleChange} />

                            <span className="ml-2 text-sm text-gray-600">Is Premium</span>
                        </label>
                    </div>

                    <div className="col-span-1 mt-4">
                        <label className="flex items-center">
                            <Checkbox name="is_purchased" value={data.is_purchased} handleChange={onHandleChange} />
                            <span className="ml-2 text-sm text-gray-600">Is Purchased</span>
                        </label>
                    </div>

                </div>

                <div className="mt-4">
                    <Label forInput="content_expire_time" value="Content Expire Time" />
                    <DateTimePicker onChange={e => setData('content_expire_time',e) } value={data.content_expire_time} name='content_expire_time' format="y-MM-dd h:mm:ss a" className='bg-white' />
                </div>

                <div className="mt-4">
                    <Label forInput="content_publish_time" value="Content Publish Time" />
                    <DateTimePicker onChange={e => setData('content_publish_time',e) } value={data.content_publish_time} name='content_publish_time' format="y-MM-dd h:mm:ss a" className='bg-white' />
                </div>
                
                <div className="mt-4">
                    <Label forInput="category" value="Category" />
                    <SelectCategory id="category" name="category" onChange={onSelectCategoryChange} className="category" options={props.categories} placeholder="Select Category" required="required" value={data.category} />
                </div>

                <div className="mt-4">
                    <Label forInput="sub_category" value="Sub Category" />
                    <SelectSubCategory id="sub_category" name="sub_category" onChange={onSelectHandleChange} className="sub_category" options={subCategories} placeholder="Select Sub Category" required="required" value={data.sub_category} />
                </div>

                <div className="mt-4">
                    <Label forInput="user_role" value="Role" />
                    <Select id="user_role" name="role" onChange={onSelectHandleChange} className="test" options={props.roles} placeholder="Select Role" required="required" value={data.role} />
                </div>

                {progress && (
                  <progress className="w-full h-2" value={progress.percentage} max="100">
                    {progress.percentage}%
                  </progress>
                )}

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4 bg-red-700" processing={processing}>
                        Save
                    </Button>
                </div>
            </form>
            </div>
        </Authenticated>
		);
}