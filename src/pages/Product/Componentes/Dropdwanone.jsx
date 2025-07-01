import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const Dropdwanone = () => {
    const handleMenuClick = (e) => {
        console.log('Click on menu item:', e);
    };

    const items = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '4th menu item',
            key: '4',
            icon: <UserOutlined />,
            danger: true,

        },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <div>
            <Dropdown menu={menuProps}>
                <Button
                    style={{
                        padding: '20px 10px',
                        fontWeight: 'bold',
                        color: 'black',
                    }}
                >
                    <Space>
                        Date Published
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </div>
    );
};

export default Dropdwanone;
